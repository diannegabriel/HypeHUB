# HypeHUB Components Breakdown

## Components
- App
- Header
- User / GamifyUser
- Goal
- GoalList
- GoalListItem
- SidePanel
- Attribute
- AttributeList
- Streak
- Accomplishment
- BattleTheme
- AddGoalButton
- Calendar
- Login / GamifyLogin
- GamifyModal
- Register

### App
- State:
- Props: 
- Used by:

### Header
- State:
- Composed Props: 
  - `<GamifyUser>`
    - `exp={integer}` // Experience of the user in percent (%)
- Inherited Props:
- Used by:

### User / GamifyUser
- State:
- Composed Props:
- Inherited Props:
  - `{exp: 60}` // from Header
- Used by: `className="user-exp"`

### Goal
- State:
- Composed Props:
  - `<GoalsList> `
    - `goalsType={goalType}` // Name of the goal type
- Inherited Props:
- Used by:

### GoalList
- State:
- Props:
- Used by:

### GoalListItem
- State:
- Props:
- Used by:

### SidePanel
- State:
- Props:
- Used by:

### Attribute
- State:
- Props:
- Used by:

### AttributeList
- State:
- Props:
- Used by:

### Streak
- State:
- Props:
- Used by:

### Accomplishment
- State:
- Props:
- Used by:

### BattleTheme
- State:
- Props:
- Used by:

### AddGoalButton
- State:
- Props:
- Used by:

### Calendar
- State:
- Props:
- Used by:

## Login
- State: email, password
- Props:
- Used by: