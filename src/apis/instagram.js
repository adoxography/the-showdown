const instagramPage = 'https://instagram.com/thesidelineshowdown';
const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*);\s*<\/script>/);

export class Photo {
  constructor(data) {
    this.data = data;

    this.uri = data.shortcode;
    this.thumbnail = data.thumbnail_src;
    this.caption = data.edge_media_to_caption.edges[0].node.text;
  }

  get url() {
    return `https://instagram.com/p/${this.uri}`;
  }
}

export async function getPhotos() {
  const response = await fetch(instagramPage);
  const text = await response.text();
  const json = JSON.parse(text.match(instagramRegExp)[1]);
  const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
  const photos = edges.map(({ node }) => new Photo(node));

  return photos;
}
