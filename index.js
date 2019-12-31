var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name)
{
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift()
  return kittens
}

function appendKitten(name)
{
  var result = [...kittens, name]
  return result
}

function prependKitten(name)
{
  var result = [name, ...kittens]
  return result
}

function removeLastKitten()
{
  var result = kittens.sclice(0, kittens.length-1)
  return result
}










































