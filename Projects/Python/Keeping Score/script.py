player_1 = "John"
player_2 = "Johnny"
current_round = 1

print("Game on!")
print(f"player 1: {player_1}")
print(f"player 2: {player_2}")
print("-------------------------")

print(f"Round {current_round}!")
player_1_score = 10
player_2_score = 13
print(f"{player_2} wins with {player_2_score} to {player_1_score}")
print("-------------------------")
print(f"Round {current_round + 1}!")
player_1_score = 20
player_2_score = 6
print(f"{player_1} defeats {player_2} by {player_1_score - player_2_score} points")
total_score = player_1_score + player_2_score
print(f"Total score of the round for players: {player_1} and {player_2} is: {total_score}")
print(f"Round {current_round + 2}!")
player_1_score = 75
player_2_score = 51
print(f"{player_1} defeats {player_2} by {player_1_score - player_2_score} points")
total_score = player_1_score + player_2_score
print(f"Total score of the round for players: {player_1} and {player_2} is: {total_score}")
