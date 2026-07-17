// Continuation token from an API
async function getAWSProductIdImages() {

  // Get the data with await fetch request
  if (data.isTruncated) {

    // Recursive
    return await getAWSProductIdImages(
      productId,
      s3, // Connection to s3
      resultArray, // Accumulator
      data.NextContinuationToken
    )
  }

  return resultArray
}

// A parser: company dir, file dir, DOM - web crawler, XML or JSON data export

// An XML or JSON data export
// Export from your streaming service like Spotify, YT Music, etc
const artistsByGenre = {
  jazz: ["Miles Davis", "John Coltrane"],
  rock: {
    classic: ["Bob Segre", "The Eagles"],
    hair: ["Def Leppard", "Whitesnake", "Poison"],
    alt: {
      classic: ["Pearl Jam", "The killers"],
      current: ["Joywave", "Sir Sly"],
    }
  },
  unclassified: {
    new: ["Caamp", "Neil Young"],
    classic: ["Seal", "Morcheeba", "Chris Staplenton"]
  }
}

console.log(artistsByGenre.rock.classic[1]) // The Eagles

const getArtistNames = (dataObj, arr = []) => {
  Object.keys(dataObj).forEach(key => {
    if (Array.isArray(dataObj[key])) {
      return dataObj[key].forEach(artist => {
        arr.push(artist)
      })
    }

    getArtistNames(dataObj[key], arr)
  })

  return arr
}

console.log(getArtistNames(artistsByGenre))
