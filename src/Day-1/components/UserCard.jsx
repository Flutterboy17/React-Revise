

const UserCard = () => {
  return (
    <div className="flex justify-center items-center  bg-amber-100 h-screen gap-2">
      <UserInfo picture="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Obaid Ullah" profession="Frontend Developer" age="Age: 25" />
      <UserInfo picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s" name="Huzaifa Obaid" profession="UI Designer" age="Age: 23" />
    </div>
  )
}

export default UserCard




export const UserInfo = (props) => {
  return (
    <div className=' w-72 rounded-2xl bg-white p-6 shadow-md text-center'>
      <img src={props.picture}
        alt="Profile" className="mx-auto mb-4 h-24 w-24 rounded-full object-cover" />
      <h1 className="text-lg font-semibold text-gray-800">{props.name}</h1>
      <h2 className="text-sm text-gray-500 ">{props.profession}</h2>
      <h3 className="text-sm text-gray-500 mb-4">{props.age}</h3>
      <button className="w-full rounded-xl bg-amber-500 text-sm py-2 font-medium text-white hover:bg-amber-600 transition cursor-pointer">Follow Me</button>

    </div>
  )
}
