import {useState} from 'react';

const initialFormValues = {fullName:"", phoneNumber:""};
function Form({addContact,contacts}) {
    console.log(addContact);
    const [form, setForm] = useState(initialFormValues);
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value });
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        // eger hem isim hem de telefon bos girildiyse asagidaki islemlere devam etme
       if (form.fullName === ""|| form.phoneNumber === "") {
            return false;
        }
        // contacts modulunden onceki tutulan contacte form icindeki yenisi ekleniyor
        addContact([...contacts,form]);
        //her add isleminden sonra form icindeki input kisimlarini bosaltmak icin
        setForm(initialFormValues);
        //console.log(form);
    };
  return (
  <form onSubmit={onSubmit}>
      <div>
        <input name="fullName" placeholder='Full-name' value={form.fullName} onChange={onChangeInput}/>
      </div>
      <div>
        <input name="phoneNumber" placeholder='Phone Number' value={form.phoneNumber} onChange={onChangeInput}/>
      </div>
      
      <div className="buton"> 
          <button>Add</button>
      </div>
      
      
      
 </form>);
}

export default Form;
