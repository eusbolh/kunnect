export const getPost = () => ({
  id: 'adsadqweqweqw513asd',
  type: 1,
  post: {
    title: 'Need some help with a regex problem.',
    content: `I am in the middle of preparing for an interview and one of the problems can be easily solved through pattern matching.

    Here is the problem statement:
    
    Find the longest valid password: Given a string find the longest
    substring that forms a valid password. (A password is valid if it
    contains 1 Upper case char and it has no digit). For eg., if the given string is "aD0aclsdkf3lksD" then lksD is the largest valid password.
    
    Here is the regex expression that I am using to catch a password:
    
    .*[A-Z].*(^[0-9]+).*[A-Z]
    
    This does not work and so I was wondering if someone could give some hints as to how I should solve this problem. Thanks in advance!`,
    comment_count: 65,
    vote_count: 1231,
    posted_at: '12 hours ago',
  },
  kuluster: {
    color: 'orange',
    name: 'AskProgramming',
    image: 'https://b.thumbs.redditmedia.com/IMuq3QpuUwXjEjXcDgIGgqOJz2j5ft1g9gEnFTFQPgQ.png',
  },
  user: {
    name: 'SuperMarioKDV',
  },
  vote: -1,
  comments: [
    {
      id: 'ashlakjdladhabdsakdj',
      user: {
        name: 'MsFoxxx',
      },
      comment: {
        content: "Worst part of this story? Many kids don't have a Swamp Thing to rescue them from the monsters who look like people",
        comment_count: 0,
        vote_count: 1321,
        posted_at: '3 hours ago',
      }
    }, {
      id: 'qewqadsadada',
      user: {
        name: 'my_prolapse',
      },
      comment: {
        content: "And now I'm sad.",
        comment_count: 0,
        vote_count: 121,
        posted_at: '2 hours ago',
      }
    }
  ]
});
