import { useState } from "react";
import { InputField } from "../components/InputForm";
import { ButtonFormSubmit } from "../components/ButtonForm";
import { SelectField } from "../components/SelectForm";
import { Option } from "../components/SelectForm";
import { WooCommerceIntegration } from "../NangoIntegrations/woocommerce";


const INTEGRATION = {
    WOOCOMMERCE: "woocommerce",
    MAGENTO: "magento"
}

const ConnectionPage = () => {
    const [ integration, setIntegration ] = useState<string>(INTEGRATION.WOOCOMMERCE);
    
    const options: Option[] = [
        {'key': INTEGRATION.WOOCOMMERCE, 'value': 'Woocommerce'}, 
        {'key': INTEGRATION.MAGENTO, 'value': 'Magento'}
    ];

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(integration === INTEGRATION.WOOCOMMERCE){
            WooCommerceIntegration({
              integrationId: e.target.integrationId.value,
              connectionId: e.target.connectionId.value,
              consumer_key: e.target.consumer_key.value,
              consumer_secret: e.target.consumer_secret.value,
              subdomain: e.target.base_url.value
        })}
        else if(integration === INTEGRATION.MAGENTO){
            console.log("Magento Integration");
      }
    }

    const handleChange = (e:any) => {
        setIntegration(e.target.value);
    }


    return(
    <div>
        <form className="w-[600px]" onSubmit={handleSubmit}>
          <SelectField 
            options={options}
            text="Select Integration"
            id="integration" 
            name="integration" 
            onChange={handleChange}/>
            <InputField 
              type="text" 
              name="integrationId" 
              id="integrationId" 
              label="Integration ID"/>
            <InputField 
              type="text" 
              name="connectionId" 
              id="connectionId" 
              label="Connection ID"/>
              <InputField 
              type="text" 
              name="base_url" 
              id="base_url" 
              label="Base Url"/>
          {integration === INTEGRATION.MAGENTO &&
              <InputField 
              type="text" 
              name="api_key" 
              id="api_key" 
              label="API KEY"/>
          }
          {integration === INTEGRATION.WOOCOMMERCE &&
          <>
            <InputField 
              type="text" 
              name="consumer_key" 
              id="consumer_key" 
              label="Consumer Key"/>
            <InputField 
                type="text" 
                name="consumer_secret"
                id="consumer_secret" 
                label="Consumer Secret"/>
            {/* <div className="grid md:grid-cols-2 md:gap-6">
              <InputField 
                  type="tel" 
                  name="fifth" 
                  id="fifth" 
                  label="fifth field"/>
            </div> */}
          </>
          }
          <ButtonFormSubmit 
            name="submit" 
            id="submit" 
            text="Submit"/>
        </form>
    </div>
    )
}

export default ConnectionPage;

