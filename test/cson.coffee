CSON = require "../README"

describe "CSON", ->
  it "should parse", ->
    result = CSON.parse """
      hello: "duder"
    """

    assert result.hello
    assert.equal result.hello, "duder"

  it "should allow comments", ->
    result = CSON.parse """
      # Some comment
      hey: "yolo" # Fo 'sho!
    """

    assert.equal result.hey, "yolo"
