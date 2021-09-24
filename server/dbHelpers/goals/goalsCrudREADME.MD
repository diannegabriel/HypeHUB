# Expected Input/output of each helper function

## dbCreateGoal

INPUT: (userId, goalName, goalType, goalDescription, goalAttribute)

userId -> from user query should be stored as state after login?
goalName -> String
goalType -> "daily", "mission" or "quest"
goalDescription -> String
goalAttribute -> ARRAY OF STRINGS "Strength", "Vitality", "Knowledge", "Social", "Willpower"

NOTE: goal status will default to incomplete on creation

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
Log "New record created" to console.

## dbReadGoals
**This function is specifically for returning an array of goals (specific to goal type) to be rendered by goalList componenet.

INPUT: (userId, goalType)

read user ex:
```
dbReadGoals("614de5c4646237d2b991f65c", "daily")

```



OUTPUT: [{},{}]
An array of goal objects where each object could look like this :
```
{"goalId":"614e09359f34f52113d35a69","goalName":"Get ripped","goalType":"daily","goalDescription":"I'd like to work on my general fitness","goalAttribute":["Strength","Willpower"],"status":"incomplete"}
```





