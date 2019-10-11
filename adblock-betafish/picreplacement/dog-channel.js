'use strict';

/* For ESLint: List any global identifiers used in this file below */
/* global Channel, Listing */


// Channel containing hard coded dogs loaded from CDN
// Subclass of Channel.
function DogsChannel() {
  Channel.call(this);
}
DogsChannel.prototype = {
  __proto__: Channel.prototype,

  getLatestListings(callback) {
    const that = this;
    function L(w, h, u) {
      let width = w;
      let height = h;
      const url = u;
      const type = that.calculateType(width, height);

      if (typeof width === 'number') {
        width = `${width}`;
      }
      if (typeof height === 'number') {
        height = `${height}`;
      }
      return new Listing({
        width,
        height,
        url,
        attributionUrl: url,
        type,
        ratio: Math.max(width, height) / Math.min(width, height),
        title: 'This is a dog!',
        channelName: 'dogchannelswitchlabel', // message.json key for channel name
      });
    }
    // the listings never change
    callback([
      L(1200, 628, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/animal-dog-golden-retriever-9716.jpg'),
      L(1200, 628, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/animal-dog-pet-brown.jpg'),
      L(1200, 628, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/bordeaux-mastiff-dog-animal.jpg'),
      L(1200, 628, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/dalmatians-dog-animal-head.jpg'),
      L(1200, 628, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/dog-brown-snout-fur.jpg'),
      L(1200, 628, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/dog-cute-pet.jpg'),
      L(1200, 628, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/dog-young-dog-small-dog-maltese.jpg'),
      L(1200, 628, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/nature-animal-dog-pet.jpg'),
      L(1200, 628, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/night-animal-dog-pet.jpg'),
      L(1200, 628, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/night-garden-yellow-animal.jpg'),
      L(1200, 628, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/wall-animal-dog-pet.jpg'),
      L(2400, 1256, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/animal-dog-golden-retriever-9716.jpg'),
      L(2400, 1256, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/animal-dog-pet-brown.jpg'),
      L(2400, 1256, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/bordeaux-mastiff-dog-animal.jpg'),
      L(2400, 1256, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/dalmatians-dog-animal-head.jpg'),
      L(2400, 1256, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/dog-brown-snout-fur.jpg'),
      L(2400, 1256, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/dog-cute-pet.jpg'),
      L(2400, 1256, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/dog-young-dog-small-dog-maltese.jpg'),
      L(2400, 1256, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/nature-animal-dog-pet.jpg'),
      L(2400, 1256, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/night-animal-dog-pet.jpg'),
      L(2400, 1256, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/night-garden-yellow-animal.jpg'),
      L(2400, 1256, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/wall-animal-dog-pet.jpg'),
      L(300, 250, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/animal-dog-golden-retriever-9716.jpg'),
      L(300, 250, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/animal-dog-pet-brown.jpg'),
      L(300, 250, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/bordeaux-mastiff-dog-animal.jpg'),
      L(300, 250, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/dalmatians-dog-animal-head.jpg'),
      L(300, 250, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/dog-brown-snout-fur.jpg'),
      L(300, 250, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/dog-cute-pet.jpg'),
      L(300, 250, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/dog-young-dog-small-dog-maltese.jpg'),
      L(300, 250, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/nature-animal-dog-pet.jpg'),
      L(300, 250, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/night-animal-dog-pet.jpg'),
      L(300, 250, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/night-garden-yellow-animal.jpg'),
      L(300, 250, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/wall-animal-dog-pet.jpg'),
      L(600, 500, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/animal-dog-golden-retriever-9716.jpg'),
      L(600, 500, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/animal-dog-pet-brown.jpg'),
      L(600, 500, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/bordeaux-mastiff-dog-animal.jpg'),
      L(600, 500, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/dalmatians-dog-animal-head.jpg'),
      L(600, 500, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/dog-brown-snout-fur.jpg'),
      L(600, 500, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/dog-cute-pet.jpg'),
      L(600, 500, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/dog-young-dog-small-dog-maltese.jpg'),
      L(600, 500, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/nature-animal-dog-pet.jpg'),
      L(600, 500, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/night-animal-dog-pet.jpg'),
      L(600, 500, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/night-garden-yellow-animal.jpg'),
      L(600, 500, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/wall-animal-dog-pet.jpg'),
      L(300, 600, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/animal-dog-golden-retriever-9716.jpg'),
      L(300, 600, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/animal-dog-pet-brown.jpg'),
      L(300, 600, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/bordeaux-mastiff-dog-animal.jpg'),
      L(300, 600, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/dalmatians-dog-animal-head.jpg'),
      L(300, 600, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/dog-brown-snout-fur.jpg'),
      L(300, 600, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/dog-cute-pet.jpg'),
      L(300, 600, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/dog-young-dog-small-dog-maltese.jpg'),
      L(300, 600, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/nature-animal-dog-pet.jpg'),
      L(300, 600, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/night-animal-dog-pet.jpg'),
      L(300, 600, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/night-garden-yellow-animal.jpg'),
      L(300, 600, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/wall-animal-dog-pet.jpg'),
      L(600, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/animal-dog-golden-retriever-9716.jpg'),
      L(600, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/animal-dog-pet-brown.jpg'),
      L(600, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/bordeaux-mastiff-dog-animal.jpg'),
      L(600, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/dalmatians-dog-animal-head.jpg'),
      L(600, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/dog-brown-snout-fur.jpg'),
      L(600, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/dog-cute-pet.jpg'),
      L(600, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/dog-young-dog-small-dog-maltese.jpg'),
      L(600, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/nature-animal-dog-pet.jpg'),
      L(600, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/night-animal-dog-pet.jpg'),
      L(600, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/night-garden-yellow-animal.jpg'),
      L(600, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/wall-animal-dog-pet.jpg'),
      L(336, 280, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/animal-dog-golden-retriever-9716.jpg'),
      L(336, 280, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/animal-dog-pet-brown.jpg'),
      L(336, 280, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/bordeaux-mastiff-dog-animal.jpg'),
      L(336, 280, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/dalmatians-dog-animal-head.jpg'),
      L(336, 280, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/dog-brown-snout-fur.jpg'),
      L(336, 280, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/dog-cute-pet.jpg'),
      L(336, 280, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/dog-young-dog-small-dog-maltese.jpg'),
      L(336, 280, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/nature-animal-dog-pet.jpg'),
      L(336, 280, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/night-animal-dog-pet.jpg'),
      L(336, 280, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/night-garden-yellow-animal.jpg'),
      L(336, 280, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/wall-animal-dog-pet.jpg'),
      L(672, 560, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/animal-dog-golden-retriever-9716.jpg'),
      L(672, 560, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/animal-dog-pet-brown.jpg'),
      L(672, 560, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/bordeaux-mastiff-dog-animal.jpg'),
      L(672, 560, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/dalmatians-dog-animal-head.jpg'),
      L(672, 560, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/dog-brown-snout-fur.jpg'),
      L(672, 560, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/dog-cute-pet.jpg'),
      L(672, 560, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/dog-young-dog-small-dog-maltese.jpg'),
      L(672, 560, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/nature-animal-dog-pet.jpg'),
      L(672, 560, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/night-animal-dog-pet.jpg'),
      L(672, 560, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/night-garden-yellow-animal.jpg'),
      L(672, 560, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/wall-animal-dog-pet.jpg'),
      L(468, 60, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_01.jpg'),
      L(468, 60, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_02.jpg'),
      L(468, 60, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_03.jpg'),
      L(468, 60, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_04.jpg'),
      L(468, 60, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_05.jpg'),
      L(468, 60, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/-3.jpg'),
      L(468, 60, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/-4.jpg'),
      L(468, 60, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_-2.jpg'),
      L(468, 60, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_-4.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x120_01.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x120_02.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x120_03.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x120_04.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x120_05.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/-1.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/-2.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/-3.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/-4.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/-5.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x12-_-1.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x12-_-2.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x12-_-4.jpg'),
      L(936, 120, 'https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x12-_-5.jpg'),
      L(450, 62, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/dog_450x62_01.jpg'),
      L(450, 62, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/dog_450x62_02.jpg'),
      L(450, 62, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/dog_450x62_03.jpg'),
      L(450, 62, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/dog_450x62_04.jpg'),
      L(450, 62, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/dog_450x62_05.jpg'),
      L(450, 62, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/-4.jpg'),
      L(450, 62, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/-5.jpg'),
      L(450, 62, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/dog_45-x62_-1.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_900x124_01.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_900x124_02.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_900x124_03.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_900x124_04.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_900x124_05.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/-1.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/-3.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/-4.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/-5.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_9--x124_-1.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_9--x124_-2.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_9--x124_-3.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_9--x124_-4.jpg'),
      L(900, 124, 'https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_9--x124_-5.jpg'),
      L(1090, 43, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1090x43_01.jpg'),
      L(1090, 43, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1090x43_02.jpg'),
      L(1090, 43, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1090x43_03.jpg'),
      L(1090, 43, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1090x43_04.jpg'),
      L(1090, 43, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1090x43_05.jpg'),
      L(1090, 43, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/-2.jpg'),
      L(1090, 43, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/-3.jpg'),
      L(1090, 43, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1-9-x43_-1.jpg'),
      L(1090, 43, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1-9-x43_-2.jpg'),
      L(1090, 43, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1-9-x43_-3.jpg'),
      L(2180, 86, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_2180x86_01.jpg'),
      L(2180, 86, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_2180x86_02.jpg'),
      L(2180, 86, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_2180x86_03.jpg'),
      L(2180, 86, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_2180x86_04.jpg'),
      L(2180, 86, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_2180x86_05.jpg'),
      L(2180, 86, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/-1.jpg'),
      L(2180, 86, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/-2.jpg'),
      L(2180, 86, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/-3.jpg'),
      L(2180, 86, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/-5.jpg'),
      L(2180, 86, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_218-x86_-2.jpg'),
      L(2180, 86, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_218-x86_-3.jpg'),
      L(2180, 86, 'https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_218-x86_-4.jpg'),
      L(1200, 50, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_1200x50_01.jpg'),
      L(1200, 50, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_1200x50_02.jpg'),
      L(1200, 50, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_1200x50_03.jpg'),
      L(1200, 50, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_1200x50_04.jpg'),
      L(1200, 50, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_1200x50_05.jpg'),
      L(1200, 50, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/-2.jpg'),
      L(1200, 50, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_12--x5-_-2.jpg'),
      L(1200, 50, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_12--x5-_-3.jpg'),
      L(2400, 100, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_2400x100_01.jpg'),
      L(2400, 100, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_2400x100_02.jpg'),
      L(2400, 100, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_2400x100_03.jpg'),
      L(2400, 100, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_2400x100_04.jpg'),
      L(2400, 100, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_2400x100_05.jpg'),
      L(2400, 100, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/-3.jpg'),
      L(2400, 100, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/-4.jpg'),
      L(2400, 100, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_24--x1--_-1.jpg'),
      L(2400, 100, 'https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_24--x1--_-4.jpg'),
      L(1440, 90, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/dog_1440x90_01.jpg'),
      L(1440, 90, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/dog_1440x90_02.jpg'),
      L(1440, 90, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/dog_1440x90_03.jpg'),
      L(1440, 90, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/dog_1440x90_04.jpg'),
      L(1440, 90, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/dog_1440x90_05.jpg'),
      L(1440, 90, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/-5.jpg'),
      L(1440, 90, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/dog_144-x9-_-2.jpg'),
      L(2880, 180, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/dog_2880x180_01.jpg'),
      L(2880, 180, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/dog_2880x180_02.jpg'),
      L(2880, 180, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/dog_2880x180_03.jpg'),
      L(2880, 180, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/dog_2880x180_04.jpg'),
      L(2880, 180, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/dog_2880x180_05.jpg'),
      L(2880, 180, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/-2.jpg'),
      L(2880, 180, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/dog_288-x18-_-5.jpg'),
      L(2880, 180, 'https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/-5.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x180_01.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x180_02.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x180_03.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x180_04.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x180_05.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_01.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_02.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_03.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_04.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_05.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-1.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-2.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-3.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-4.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-5.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-6.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-7.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-8.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-9.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_1-.jpg'),
      L(1456, 180, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_11.jpg'),
      L(728, 90, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x90_01.jpg'),
      L(728, 90, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x90_02.jpg'),
      L(728, 90, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x90_03.jpg'),
      L(728, 90, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x90_04.jpg'),
      L(728, 90, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x90_05.jpg'),
      L(728, 90, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_01.jpg'),
      L(728, 90, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_02.jpg'),
      L(728, 90, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_03.jpg'),
      L(728, 90, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_04.jpg'),
      L(728, 90, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_05.jpg'),
      L(728, 90, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_-2.jpg'),
      L(728, 90, 'https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_-4.jpg'),
      L(340, 90, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_01.jpg'),
      L(340, 90, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_02.jpg'),
      L(340, 90, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_03.jpg'),
      L(340, 90, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_04.jpg'),
      L(340, 90, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_05.jpg'),
      L(340, 90, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_-1.jpg'),
      L(340, 90, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_-3.jpg'),
      L(340, 90, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_-4.jpg'),
      L(340, 90, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_-8.jpg'),
      L(340, 90, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_-9.jpg'),
      L(340, 90, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_1-.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_01.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_02.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_03.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_04.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_05.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-1.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-2.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-4.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-5.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-6.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-7.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-9.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_1-.jpg'),
      L(680, 180, 'https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_11.jpg'),
      L(160, 600, 'https://cdn.adblockcdn.com/pix/Dogs/16-x6--/16-x6--/bordeaux-mastiff-dog-animal.jpg'),
      L(160, 600, 'https://cdn.adblockcdn.com/pix/Dogs/16-x6--/16-x6--/dog-cute-pet.jpg'),
      L(160, 600, 'https://cdn.adblockcdn.com/pix/Dogs/16-x6--/16-x6--/wall-animal-dog-pet.jpg'),
      L(320, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/16-x6--/32-x12--/animal-dog-pet-brown.jpg'),
      L(320, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/16-x6--/32-x12--/bordeaux-mastiff-dog-animal.jpg'),
      L(320, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/16-x6--/32-x12--/dog-young-dog-small-dog-maltese.jpg'),
      L(320, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/16-x6--/32-x12--/night-garden-yellow-animal.jpg'),
      L(560, 672, 'https://cdn.adblockcdn.com/pix/Dogs/56-x672/56-x672/pexels-photo-97863.jpg'),
      L(560, 672, 'https://cdn.adblockcdn.com/pix/Dogs/56-x672/56-x672/dog-animal-friend-pointer-16226-.jpg'),
      L(560, 672, 'https://cdn.adblockcdn.com/pix/Dogs/56-x672/56-x672/pexels-photo-594687.jpg'),
      L(1120, 1344, 'https://cdn.adblockcdn.com/pix/Dogs/56-x672/112-x1344/pexels-photo-113883.jpg'),
      L(1120, 1344, 'https://cdn.adblockcdn.com/pix/Dogs/56-x672/112-x1344/pexels-photo-434-9-.jpg'),
      L(1120, 1344, 'https://cdn.adblockcdn.com/pix/Dogs/56-x672/112-x1344/pexels-photo-46-186.jpg'),
      L(1120, 1344, 'https://cdn.adblockcdn.com/pix/Dogs/56-x672/112-x1344/pexels-photo-58997.jpg'),
      L(1200, 628, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/pexels-photo-89249.png'),
      L(2400, 1256, 'https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/pexels-photo-89249.png'),
      L(300, 250, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/pexels-photo-89249.png'),
      L(600, 500, 'https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/pexels-photo-89249.png'),
      L(300, 600, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/pexels-photo-89249.png'),
      L(600, 1200, 'https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/pexels-photo-89249.png'),
      L(336, 280, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/pexels-photo-89249.png'),
      L(672, 560, 'https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/pexels-photo-89249.png'),
      L(160, 600, 'https://cdn.adblockcdn.com/pix/Dogs/16-x6--/16-x6--/pexels-photo-89249.png'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/bordeaux-mastiff-dog-animal.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dalmatians-dog-animal-head.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dog-bernese-mountain-dog-berner-senner-dog-577-8.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dog-bulldog-white-tongue-4-986.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dog-cavalier-king-charles-spaniel-funny-pet-162193.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dog-hybrid-animal-lying-162349.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dog-young-dog-puppy-59965.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dog-young-dog-small-dog-maltese.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/english-bulldog-bulldog-canine-dog-4-544.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/french-bulldog-summer-smile-joy-16-846.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/nature-animal-dog-pet.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/papillon-dog-animal-59969.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-13-763.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-134392.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-164446.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-169524.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-2358-5.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-247997.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-25757-.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-257577.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-271824.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-356378.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-3749-8.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-412465.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-4162-4.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-452772.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-46-132.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-46-823.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-485294.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-532423.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-58997.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-594687.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-612813.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-61372.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-66687-.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-688694.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-71-927.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-72-678.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-752383.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-8--33-.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-9238-.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/tibet-terrier-cute-pet-dog-162276.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/wall-animal-dog-pet.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/weimaraner-puppy-dog-snout-97-82.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/wildlife-photography-pet-photography-dog-animal-159541.jpg'),
      L(180, 680, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/wildlife-photography-pet-photography-dog-dog-runs-159492.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/bordeaux-mastiff-dog-animal.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dalmatians-dog-animal-head.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dog-bernese-mountain-dog-berner-senner-dog-577-8.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dog-bulldog-white-tongue-4-986.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dog-cavalier-king-charles-spaniel-funny-pet-162193.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dog-hybrid-animal-lying-162349.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dog-young-dog-puppy-59965.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dog-young-dog-small-dog-maltese.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/english-bulldog-bulldog-canine-dog-4-544.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/french-bulldog-summer-smile-joy-16-846.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/nature-animal-dog-pet.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/papillon-dog-animal-59969.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-13-763.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-134392.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-164446.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-169524.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-2358-5.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-247997.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-25757-.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-257577.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-271824.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-356378.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-3749-8.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-412465.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-4162-4.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-452772.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-46-132.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-46-823.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-485294.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-532423.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-58997.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-594687.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-612813.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-61372.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-66687-.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-688694.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-71-927.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-72-678.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-752383.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-8--33-.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-9238-.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/tibet-terrier-cute-pet-dog-162276.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/wall-animal-dog-pet.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/weimaraner-puppy-dog-snout-97-82.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/wildlife-photography-pet-photography-dog-animal-159541.jpg'),
      L(360, 1360, 'https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/wildlife-photography-pet-photography-dog-dog-runs-159492.jpg'),
    ]);
  },
};

Object.assign(window, {
  DogsChannel,
});
