`
mutation {
  createEvent(eventInput: {title: "lsdfj", description: "kladsjf", category: "timepass", startDate: "Sun Mar 15 2020 20:42:16 GMT+0530 (India Standard Time)", endDate: "Sun Mar 15 2020 20:42:16 GMT+0530 (India Standard Time)",capacity:100.00}) {
    entity
    title
    description
    category
    isPublished
    isListed
    isInviteOnly
    slugUri
    startDate
    endDate
  }
}


mutation {
  createEvent(eventInput: {title: "last test please work fine", description: "kladsjf", category: "timepass", location: "dombivli", country: "India", startDate: "Sun Mar 15 2020 20:42:16 GMT+0530 (India Standard Time)", endDate: "Sun Mar 15 2020 20:42:16 GMT+0530 (India Standard Time)"})
}

mutation {
  createUser(userInput: {username: "rahul", fullName: "Rahul Ravindran", email: "rahul@gmail.com", password: "rahul", gender: "male", birthDate: "2020-03-21T07:15:24.214Z", companyName: "Beingcodr", designation: "Full-stack developer", address: {streetAddress1: "ramchandra complex", streetAddress2: "Subhash cross road ganeshnagar", city: "Dombivli", state: "Maharashtra", pincode: "421202", country: "India"}, billingAddress: {streetAddress1: "ramchandra complex", streetAddress2: "Subhash cross road ganeshnagar", city: "Dombivli", state: "Maharashtra", pincode: "421202", country: "India"}}) {
    _id
    entity
    username
    fullName
    companyName
    designation
    email {
      email
    }
    password
  }
}









{
  events {
    entity
    slugUri
    title
    userId {
      username
      email
    }
  }
}
`;
