CSON
====

CoffeeScript Object Notation implemented in the hackiest way.

One downside is that it currently depends on the CoffeeScript compiler when it 
should be a simple parser of its own.

    module.exports =
      parse: (source) ->
        Function("return #{CoffeeScript.compile(source, bare: true)}")()

This really needs to be improved. To do it correctly we'd need to detect
object/array values and indent while moving them to separate lines. Single
values would exist without newlines or indentation. CSON.stringify would be
called recursively.

The current hack of using JSON works because JSON is valid CSON.

TODO: Escape keys that need it.

      stringify: (object) ->
        representation = JSON.parse(JSON.stringify(obj))

        Object.keys(representation).map (key) ->
          value = representation[key]
          "#{key}: #{JSON.stringify(value)}"
        .join("\n")
