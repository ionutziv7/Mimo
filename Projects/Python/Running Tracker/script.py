best_distance = 10
best_pace = 7
current_distance = 12
current_pace = 6.5

if current_distance > best_distance:
    best_distance = current_distance
    print(f"New distance record: {best_distance} km")

if current_pace < best_pace:
    best_pace = current_pace
    print(f"New best pace: {best_pace} min/km")