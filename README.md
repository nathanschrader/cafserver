# cafserver

## API Endpints
##### API Runs on port 3000

#### HTTP GET CURRENT MEAL
- /getMeal

#### HTTP GET SCORES
- /getMainlineScore
- /getCheflineScore 
- /getGlutenFreeScore
- /getSandwichlineScore
- /getWraplineScore

#### HTTP POST SCORE
- /setMainLineScore/:vote
- /setChefLineScore/:vote
- /setGlutenFreeScore/:vote
- /setSandwichLineScore/:vote
- /setWrapLineScore/:vote

#### HTTP GET COMMENTS

- /getMainlineComments
- /getCheflineComments
- /getGlutenFreeComments
- /getSandwichLineComments
- /getWraplineComments

#### HTTP POST COMMENT
- /addMainLineComment/:comment
- /addChefLineComment/:comment
- /addGlutenFreeComment/:comment
- /addSandwichLineComment/:comment
- /addWrapLineComment/:comment