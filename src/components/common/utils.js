/*
 * Format Date
 */
import { STORE_KEY } from '../../constants/constants';

export const friendlyFormatDate = (date) => {
  let newDate;

  if (date) {
    const currentDate = new Date(date);
    let month = (currentDate.getMonth() + 1);
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    month = `0${month}`.substr(-2);
    day = `0${day}`.substr(-2);
    year = `0${year}`.substr(-2);
    newDate = `${month}/${day}/${year}`;
  }

  return newDate;
}
/*
 * Format Time
 */
export const detailedFormatTime = (time) => {
  let newTime;

  if (time) {
    let hours;
    let minutes;
    let seconds;

    if (time.includes(':')) {
      const a = time.split(':');
      hours = a.length === 3 ? a[0] : '00';
      minutes = a.length === 3 ? a[1] : a[0];
      seconds = a.length === 3 ? a[2] : a[1];
    } else {
      const sec = parseInt(time, 10);
      hours = Math.floor(sec / 3600);
      minutes = Math.floor((sec - hours * 3600) / 60);
      seconds = sec - hours * 3600 - minutes * 60;
    }

    hours = `0${hours}`.substr(-2);
    minutes = `0${minutes}`.substr(-2);
    seconds = `0${seconds}`.substr(-2);
    newTime = `${hours}:${minutes}:${seconds}`;
  }

  return newTime;
}

/*
 * Serializers for podcast data
 */
export const formatPodcastInfo = {
  transformPodcastData: (item) => {
    return {
      id: item['id'] && item['id']['attributes']
        ? item['id']['attributes']['im:id'] : null,
      name: item['im:name'] ? item['im:name']['label'] : null,
      author: item['im:artist'] ? item['im:artist']['label'] : null,
      image: item['im:image'] && item['im:image'][2]
        ? item['im:image'][2]['label'] : null,
    };
  },

  transformDetailsData: (item) => {
    return {
      id: item['collectionId'] || null,
      name: item['collectionName'] || null,
      author: item['artistName'] || null,
      description: item['itunes:summary'] ? item['itunes:summary'][0] : null,
      image: item['artworkUrl600'] || null,
      episodes: formatEpisodes(
        item['item'],
        item['collectionId']
      ).reverse(),
    };
  },
};

/*
 * Serializer episodes
 */
export const formatEpisodes = (episodes, podcastId) => {
  const serializeEpisodes = [];

  episodes.forEach((episode, index) => {
    const parsedInfo = {
      id: `${index}_${podcastId}`,
      podcastId,
      title: episode['title'] ? episode['title'][0] : '-',
      description: episode['description'] ? episode['description'][0] : null,
      pubDate: episode['pubDate'] ? friendlyFormatDate(episode['pubDate'][0]) : '-',
      duration: episode['itunes:duration'] ? detailedFormatTime(episode['itunes:duration'][0]) : '-',
      mp3: episode['enclosure'] && episode['enclosure'][0] && episode['enclosure'][0]['$']
        ? episode['enclosure'][0]['$']['url'] : null,
    };

    serializeEpisodes.push(parsedInfo);
  });

  return serializeEpisodes;
}


