import DoctorCard from '../../components/DoctorCard/DoctorCard';

const Doctors = () => {

    const Doctors = [
        {
          id: 1,
          Name: "Abdallah Walid",
          JD: "Consultant dermatologist",
          Rating: "⭐⭐⭐⭐",
          Number: 12345,
          Img: "https://templatekits.themewarrior.com/medicate/wp-content/uploads/sites/7/2020/09/Doctor-4-271x300.jpg",
        },
        {
          id: 2,
          Name: "Mohamed Elsayed",
          JD: "Consultant dermatologist",
          Rating: "⭐⭐⭐⭐⭐",
          Number: 12345,
          Img: "https://th.bing.com/th/id/OIP.tIbRYE8rLriaAL6xEIhvNAAAAA?pid=ImgDet&w=217&h=300&rs=1",
        },
        {
          id: 3,
          Name: "Mohamed Fahmy",
          JD: "Consultant therapist",
          Rating: "⭐⭐⭐",
          Number: 12345,
          Img: "https://th.bing.com/th/id/R.f2a455e5f0b57d8f54f0207e9a9366d7?rik=3Zdxj1%2b5hcfaRA&riu=http%3a%2f%2fbeatingpancreatitis.com%2fwp-content%2fuploads%2f2015%2f05%2fdoctor-06-204x300.jpg&ehk=M5%2bJcxPVuAyrXOGd%2fptpekKFBMESN4oJvffS3K3iQu0%3d&risl=&pid=ImgRaw&r=0",
        },
      ];

  return (
    <div>
        {Doctors.map((D) => (
        <DoctorCard
          key={D.id}
          ID={D.id}
          Name={D.Name}
          JD={D.JD}
          Rating={D.Rating}
          number={D.Number}
          Img={D.Img}
        />
      ))}
    </div>
  )
}

export default Doctors