# Expected Input/output of each helper function

## dbCreateGoal

INPUT: (userId, goalName, goalType, goalDescription, goalAttribute)

userId -> from user query should be stored as state after login?
goalName -> String
goalType -> "daily", "mission" or "quest"
goalDescription -> String
goalAttribute -> ARRAY OF STRINGS "Strength", "Vitality", "Knowledge", "Social", "Willpower"

new goal ex:

```
dbCreateGoal(
  "614de5c4646237d2b991f65c",
  "Get ripped",
  "daily",
  "I'd like to work on my general fitness",
  ["Strength", "Willpower"]
);
```


OUTPUT: 


## dbReadGoals

INPUT: ()

read user ex:

dbReadGoals()

OUTPUT: 





