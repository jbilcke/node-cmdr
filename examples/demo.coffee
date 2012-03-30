#!/usr/bin/env coffee
(require 'cmdr')
  help:
    pi: -> console.log "very important for a restaurant"

  order: (meal="") ->
    if meal.length is 0
      console.error "you need to order something"
      process.exit 1
    else
      console.log "delivering #{meal}"
      process.exit 0

  list:
    meals: -> console.log "- chicken\n- cheese\n- potatoes"

  pi: -> console.log 3.1415