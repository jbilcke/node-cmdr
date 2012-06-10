#!/usr/bin/env coffee

(require 'cmdr')

  help:
    pi: -> console.log "very important for a restaurant"

  order: (meal="") ->
    unless meal
      console.error "you need to order something"
      process.exit 1

    console.log "delivering #{meal}"

  list:
    meals: -> console.log "- chicken\n- cheese\n- potatoes"

  pi: -> console.log 3.1415