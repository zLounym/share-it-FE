const people = [
  {
    firstname: 'Daisy',
    lastName: 'Zhang',
    skills: [{"name" : "okr", "level": 4} , {"name" : "product roadmap", "level": 4}],
    interests: 'Interested in analytics tools',
    email: 'daisy@twill.rocks',
    image: 'https://ca.slack-edge.com/T1ZJ2B8A2-U1ZJE3WTH-5b7a1cd95ff5-512'
  },
  {
    firstname: 'David',
    lastName: 'Few',
    skills: [{"name" : "logistics", "level": 4} , {"name" : "sales", "level": 4}],
    interests: 'Online marketing',
    email: 'david@twill.rocks',
    image: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
  },
  {
    firstname: 'Ayden',
    lastName: 'Quintero',
    skills: [{"name" : "operation excellence", "level": 2} , {"name" : "logistics", "level": 4}],
    interests: 'Interested in roadmap',
    email: 'Ayden@twill.rocks',
    image: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
  {
    firstname: 'Emily',
    lastName: 'Hoo',
    skills: [{"name" : "react", "level": 4} , {"name" : "service worker", "level": 1}],
    interests: 'C++',
    email: 'emily@twill.rocks',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
  {
    firstname: 'Yolanda',
    lastName: 'Douglas',
    skills: [{"name" : "wordpress", "level": 4} , {"name" : "copywriting", "level": 4}],
    interests: 'Interested in React',
    email: 'Yolanda@twill.rocks',
    image: 'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg'
  },
  {
    firstname: 'Kitty',
    lastName: 'Akhtar',
    skills: [{"name" : "google analytics", "level": 2} , {"name" : "master data management", "level": 4}],
    interests: 'Interested in Java',
    email: 'Kitty@twill.rocks',
    image: 'https://images.unsplash.com/photo-1470506028280-a011fb34b6f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80'
  },
  {
    firstname: 'Sarina',
    lastName: 'Duggan',
    skills: [{"name" : "machine learning", "level": 1} , {"name" : "html", "level": 4}],
    interests: 'Interested in mobile app development',
    email: 'Sarina@twill.rocks',
    image: 'https://images.unsplash.com/photo-1516697702773-80ded84ace68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
  {
    firstname: 'Piotr',
    lastName: 'Moreno',
    skills: [{"name" : "python", "level": 4} , {"name" : "cloud service", "level": 4}],
    interests: 'Interested in AI',
    email: 'Piotr@twill.rocks',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
  }
]

export const createUserStore = () => ({
  userList: [...people],
  add(user) {
    this.userList.push({
      ...user,
    })
  },
  update(userArr) {
    this.userList = [...userArr]
  }
})
