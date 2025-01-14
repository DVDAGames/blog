---
title: Verisimilitude in Fake Worlds
date: 2025-01-09
excerpt: "Strategies for making a static world feel alive in Line of Sight"
coverImage: /assets/blog/line-of-sight/hero.png
author:
  name: DVDA Games
  picture: /assets/blog/authors/dvda.png
ogImage:
  url: /assets/blog/line-of-sight/hero.png
preview: false
---
While [Line of Sight](https://dvdagames.com/games/line-of-sight/) development is currently paused due to real-life concerns like income, rent, health insurance, and other boring stuff like that, that doesn't mean I can't share some insights from the development process.

Regardless of what kind of game you're making - or story you're telling - there's one important property that can make your world feel real - maybe even "alive": [Verisimilitude](<https://en.wikipedia.org/wiki/Verisimilitude_(fiction)>).

> **Verisimilitude** is the "lifelikeness" or believability of a [work of fiction](https://en.wikipedia.org/wiki/Fiction "Fiction").

In some fictional worlds, this might mean that shopkeepers and other [NPCs can't see you when you put a bucket on their heads](insert-skyrim-link) and in others it might mean that shopkeepers and other NPCs get angry and attack you when you put a bucket on their heads.

In Line of Sight's fictional world, inspired by old-school, screen-based retro games, verisimilitude currently means that NPCs:

- Don't always patrol the same path
- Don't always start at the same point in their path
- Don't reset to their origin when you leave the screen and come back

**Note**: There's a lot more I'd like to implement, but this is what it _currently_ means.

## Looking Ahead

One of the main conceits in _Line of Sight_ is that each screen acts as a standalone puzzle the player must solve, but the player also has a sniper rifle with a scope that they can use to scout ahead to the next screen.

![looking ahead via the sniper scope](/assets/blog/verisimilitude/line-of-sight_scope.gif)

This functions like the [binoculars in 2D _Metal Gear_ games](https://metalgear.fandom.com/wiki/Binoculars#2D_games), and allows them to observe enemy movements and timing and consider their options before committing to a plan of action.

## NPC Verisimilitude in GDScript

In practice, _Line of Sight_'s approach to verisimilitude means that every NPC registers itself with a global [Dictionary](https://docs.godotengine.org/en/stable/classes/class_dictionary.html) when it first enters a scene.

```gdscript
class_name NPC
extends PhysicsBody2D

func _ready() -> void:
	NpcManager.on_trigger_npc_registered.connect(_on_initialized)

	details = NpcManager.NPC_DATABASE[id]
	NpcManager.register_npc(id, details)
```

![npc pathing and patrolling between screen changes](/assets/blog/verisimilitude/line-of-sight_pathing.gif)

When an NPC exits a scene, it also updates its position, current patrol route identifier, current state, the progress along its patrol route, and the current time - by checking the underlying system time via [`Time.get_unix_time_from_system()`](https://docs.godotengine.org/en/stable/classes/class_time.html#class-time-method-get-unix-time-from-system).

```gdscript
class_name NPC
extends PhysicsBody2D

# ...

func _exit_tree() -> void:
	var progress = 0.0

	if current_patrol_route:
		progress = current_patrol_route.progress

	NpcManager.update_npc(
		id,
		{
			"last_known_position": global_position,
			"last_known_heading": facing,
			"last_path_id": current_patrol_route_id,
			"last_path_direction": current_patrol_direction,
			"last_path_progress": progress,
			"last_known_state": state,
			"last_known_sub_state": sub_state,
			"last_known_player_sighting": visual_detection_zone.last_known_location,
		}
	)
```

This allows me to calculate the [delta](https://en.wikipedia.org/wiki/Delta_timing) between when the NPC was last seen and when they are next seen and use that to move them along their patrol route however far they would have walked given their movement speed and the elapsed time.

```gdscript
class_name NPC
extends PhysicsBody2D

# ...

func _on_initialized(npc_id: String, npc: Dictionary) -> void:
	if npc_id == id:
		var patrol_progress: float = 0.0
		var patrol_progress_ratio: float = randf_range(0.00, 1.00)

	# if we've seen this NPC already
	if "last_known_position" in npc:
		global_position = npc.last_known_position
		on_change_position.emit(global_position)

	# ...

	if "last_seen" in npc:
		var delta: float = Time.get_unix_time_from_system() - npc.last_seen

		var previous_progress: float = 0

		if "last_path_progress" in npc:
			previous_progress = npc.last_path_progress

		var new_progress: float = patrol_speed * delta
		var total_progress: float = previous_progress + new_progress * current_patrol_direction
		patrol_progress = total_progress

		# ...

		if patrol_progress == 0.0:
			current_patrol_route.progress_ratio = patrol_progress_ratio
		else:
			current_patrol_route.progress = patrol_progress
```

In cases where the player has been away from the NPC for awhile, the effect of this functionality is diminished, but players using the sniper scope to scout ahead in _Line of Sight_ will be rewarded with the NPC being almost exactly where they'd expect them to be based on what they were doing when they were last observed through the scope.

In addition to this position tracking, most NPCs are given a set of potential [Path2D](https://docs.godotengine.org/en/stable/classes/class_path2d.html) patrol routes, and when they first enter a scene, they randomly choose one of those paths and randomly choose a starting position and patrol direction along that path. As they progress, if their patrol routes intersect, there is an increasing chance of switching to an intersecting patrol route every time they cross an intersection, which means that their movements are not always predictable. This could end up being a bad idea for a stealth game.

Each guard NPC also has a random chance to get "spooked" and turn some degrees from their normal path to investigate the area around them for a randomly chosen interval before going back to their regular route or reversing direction.

## Future Plans

I also have plans to keep track of an NPC-specific anxiety level based on how often their alerted state gets triggered and a global anxiety level that increases as more NPCs are alerted, leading to more cautious and vigilant behavior from NPCs who haven't encountered the player yet.

These anxiety levels could change which patrol routes or idle behaviors NPCs exhibit, and could even lead to some NPCs abandoning their patrol routes to search for the player if the global anxiety level gets too high.