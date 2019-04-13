# cafserver

## API Endpints
##### API Runs on port 3000

#### HTTP GET CURRENT MEAL
- /getMeal

#### HTTP GET DATA
- /getData  (returns an json array of data for all lines in this format)

[
    {"name":"mainLine","votes":[],"comments":[]},
    {"name":"chefLine","votes":[],"comments":[]},
    {"name":"glutenFree","votes":[],"comments":[]},
    {"name":"sandwichLine","votes":[],"comments":[]},
    {"name":"wrapLine","votes":[],"comments":[]}
]

#### HTTP POST SCORE
- /setMainLineScore/:vote
- /setChefLineScore/:vote
- /setGlutenFreeScore/:vote
- /setSandwichLineScore/:vote
- /setWrapLineScore/:vote

#### HTTP POST COMMENT
- /addMainLineComment/:comment
- /addChefLineComment/:comment
- /addGlutenFreeComment/:comment
- /addSandwichLineComment/:comment
- /addWrapLineComment/:comment