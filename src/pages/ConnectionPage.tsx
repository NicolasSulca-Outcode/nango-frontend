import { InputField } from "../components/InputForm";
import { ButtonFormSubmit } from "../components/ButtonForm";
import { SelectField } from "../components/SelectForm";
import { Option } from "../components/SelectForm";

const ConnectionPage = () => {
    
    const options: Option[] = [
        {'key': '1', 'value': 'Woocommerce'}, 
        {'key': '2', 'value': 'Magento'}
    ];

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log("submit")
    }

    const handleChange = () => {
        console.log("change");
    }


    return(
    <div>
        <form className="w-[600px]" onSubmit={handleSubmit}>
          <SelectField 
            options={options}
            text="Select Integration"
            id="country" 
            name="country" 
            onChange={handleChange}/>
          <InputField 
            type="text" 
            name="first" 
            id="first" 
            label="first field"/>
          <InputField 
            type="text" 
            name="second" 
            id="second" 
            label="second field"/>
          <InputField 
            type="text" 
            name="third" 
            id="third" 
            label="third field"/>
          <div className="grid md:grid-cols-2 md:gap-6">
            <InputField 
                type="tel" 
                name="fifth" 
                id="fifth" 
                label="fifth field"/>
            <InputField 
                type="tel" 
                name="fifth" 
                id="fifth" 
                label="fifth field"/>
          </div>
          <ButtonFormSubmit 
            name="submit" 
            id="submit" 
            text="Submit"/>
        </form>
    </div>
    )
}

export default ConnectionPage;

