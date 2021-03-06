export default class FeedService {

  posts: Array<any>;

  constructor(private $sce, private moment, private $rootScope) {
    this.posts = [
      {
        name: 'Sam Soffes',
        userImage: 'sam-soffes.png',
        text: this.$sce.trustAsHtml('How to Get inspired: the Right way - Designmondo <a>but.ly/1IE4uJc</a> Good stuff from <a>@designmodo!</a>'),
        time: moment().add(-3, 'minutes'),
        comments: [
          {
            name: 'Jed Bridges',
            userImage: 'sam-soffes.png',
            text: this.$sce.trustAsHtml('Great way to start the week. Thanks for sharing!'),
          },{
            name: 'Ren walker',
            userImage: 'sam-soffes.png',
            text: this.$sce.trustAsHtml('Ren walker'),
          }
        ]
      },
      {
        name: 'Meg Robichaud',
        userImage: 'meg-robichaud.png',
        text: this.$sce.trustAsHtml('My view this morning is simple beautiful.. <a>instagram.com/p/mV0PUrHRwQ</a>'),
        time: moment().add(-25, 'minutes'),
        image: 'meg.jpg'
      },
      {
        name: 'Kerem Suer',
        userImage: 'kerum-suer.jpg',
        text: this.$sce.trustAsHtml('8 Apps to Turn Your Pipe Dreams Into Prototypes <a>on.mash.to/1oubyu8</a>'),
        time: moment().add(-50, 'minutes')
      },
      {
        name: 'Liang Shi',
        userImage: 'liang-shi.jpg',
        text: this.$sce.trustAsHtml('How to get animations out of your head. <a>http://bit.ly/1q7BngO</a>  Funny and useful.'),
        time: moment().add(-1, 'hours'),
        comments: []
      },
      {
        name: 'Vitor Leal',
        userImage: 'vitor-leal.jpg',
        text: this.$sce.trustAsHtml('You have to see this bike. It will make your daily commute a absolute joy ride! <a>vimeo.com/p/mV0PUrHRwQ/</a>'),
        time: moment().add(-25, 'minutes'),
        image: 'vitor.jpg',
        comments: []
      },
      {
        name: 'Pallavi Gupta',
        userImage: 'marco.jpg',
        text: this.$sce.trustAsHtml('You have to see this bike. It will make your daily commute a absolute joy ride! <a>vimeo.com/p/mV0PUrHRwQ/</a>'),
        time: moment().add(-25, 'minutes'),
        comments: []
      },
      {
        name: 'Jenny Shen',
        userImage: 'jenny.jpg',
        text: this.$sce.trustAsHtml('Perfect day to be taking pictures <a>instagram.com/p/mV0PUrHRwQ/</a>'),
        time: moment().add(-1, 'hour'),
        comments: []
      },
      {
        name: 'Jonathan Moreira',
        userImage: 'jonathan.jpg',
        text: this.$sce.trustAsHtml('Thoughtful brand desicion vs, emotional brand desicion. <a>ow.ly/vtT2i</a>'),
        time: moment().add(-1, 'hour'),
        comments: []
      },
      {
        name: 'Jon Brennan',
        userImage: 'jed.jpg',
        text: this.$sce.trustAsHtml('Had some time to play with the interactive portion of inDesignCC <a>bit.il/1lE5QD</a>'),
        time: moment().add(-25, 'minutes'),
        comments: []
      },
      {
        name: 'Lauren Gray',
        userImage: 'lauren.jpg',
        text: this.$sce.trustAsHtml('7 Servings of Type For a Healthy Head & Body'),
        time: moment().add(-25, 'minutes'),
        image: 'lauren.jpg',
        comments: []
      },
      {
        name: 'Buzz Usborne',
        userImage: 'buzz.jpg',
        text: this.$sce.trustAsHtml('Road trip! <a>bit.ly/1hkXFdK</a>'),
        time: moment().add(-25, 'minutes'),
        image: 'buzz.jpg',
        comments: []
      },
      {
        name: 'Scott Riley',
        userImage: 'buzz.jpg',
        text: this.$sce.trustAsHtml('Deal with your problems before they deal with yor happiness'),
        time: moment().add(-2, 'hours'),
        image: 'chloe.jpg',
        comments: []
      },
      {
        name: 'Ryan O. Hicks',
        userImage: 'buzz.jpg',
        text: this.$sce.trustAsHtml('Excited about <a>@99U</a> Conf lineup this year <a>Conference.99u.com</a>'),
        time: moment().add(-1, 'hours'),
        image: 'marco.jpg',
        comments: []
      },
      {
        name: 'Samihah Azim',
        userImage: 'samihah.jpg',
        text: this.$sce.trustAsHtml('Love this picture <a>instegram.com/p/mVOPUrHRwQ/</a>'),
        time: moment().add(-25, 'minutes'),
        image: 'lindsey.jpg',
        comments: []
      },
      {
        name: 'Jessica Tuan',
        userImage: 'user-profile.jpg',
        text: this.$sce.trustAsHtml('Love this picture <a>instegram.com/p/mVOPUrHRwQ/</a>'),
        time: moment().add(-25, 'minutes'),
        comments: []
      },
      {
        name: 'Jessica Tuan',
        userImage: 'user-profile.jpg',
        text: this.$sce.trustAsHtml('Love this picture <a>instegram.com/p/mVOPUrHRwQ/</a>'),
        time: moment().add(-25, 'minutes'),
        comments: []
      },
      {
        name: 'Jessica Tuan',
        userImage: 'user-profile.jpg',
        text: this.$sce.trustAsHtml('Love this picture <a>instegram.com/p/mVOPUrHRwQ/</a>'),
        time: moment().add(-25, 'minutes'),
        image: 'buzz.jpg',
        comments: []
      }
    ];
  }

  add(post) {
    post.text = this.$sce.trustAsHtml(post.text);
    this.posts.unshift(post);
    this.$rootScope.$emit('feed:add', post);
  }

  fetch(filter) {
    var posts = this.posts;

    if(filter.feed){
      posts = posts.filter((post) => {
        return post.name !== filter.feed;
      });
    }
    if(filter.name){
      posts = posts.filter((post) => {
        return post.name === filter.name;
      });
    }
    if(filter.type === 'photo'){
      posts = posts.filter((post) => {
        return !!post.image;
      });
    }
    return posts;
  }
}
