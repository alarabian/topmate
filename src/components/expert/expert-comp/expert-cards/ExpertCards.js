import Image from 'next/image'
import React from 'react'
const data = [
  {
    "id": 1,
    "url":"/assets/images/profile1.jpg",
    "name": "Ashish & Shrishty",
    "description": "Helps people navigate the complex world of finance"
  },
  {
    "id": 2,
    "name": "Raksha",
    "url":"/assets/images/profile2.jpeg",
    "description": "Helps aspiring psychologists navigate through this profession"
  },
  {
    "id": 3,
    "name": "Absy",
    "url":"/assets/images/profile3.jpeg",
    "description": "Helps people with ADHD, Sex, and/or Trauma concerns"
  },
  {
    "id": 4,
    "name": "Nidhi",
    "url":"/assets/images/profile4.JPG",
    "description": "Helps people move abroad for education and work"
  },
  {
    "id": 5,
    "name": "Danny",
    "url":"/assets/images/profile5.png",
    "description": "Helps people get a job in tech"
  },
  {
    "id": 6,
    "name": "Prakriti & Ashish",
    "url":"/assets/images/profile1.jpg",
    "description": "Helps people travel the world with DIY itineraries"
  },
  {
    "id": 7,
    "name": "Priyanka",
    "url":"/assets/images/profile2.jpeg",
    "description": "Helps parents pick the best toys for kids 0-5"
  },
  {
    "id": 8,
    "name": "Aishwarya",
    "url":"/assets/images/profile3.jpeg",
    "description": "Created a side hustle helping creators build a business"
  }
]

const ExpertCards = () => {
  return (
    <>
    <div className="expertCards">
        {data.map((item)=>{
          return <div className="expertItem" key={item.id}>
            <div className="img">
              <Image src={item.url} alt='Image' width={120} height={120}></Image>
            </div>
            <div className="content">
              <h5>{item.name}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        })}
      </div>  
    </>
  )
}

export default ExpertCards