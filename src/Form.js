import React, {useState, useEffect} from "react";
import useAxios from 'axios-hooks'
import './Form.css';

const Form = () => {
  const [number, setNumber] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState();
  const [mappedPlans, setMappedPlans] = useState({});
  const [{data, loading, error}] = useAxios(
    process.env.PUBLIC_URL + '/plans.json'
  );

  const onPlanChange = (event) => {
    setSelectedPlan(event.currentTarget.value);
  };

  const onNumberChange = (event) => {
    setNumber(event.currentTarget.value);
  };

  useEffect(() => {
    if (data) {
      const mPlans = data.plans.reduce((out, plan) => {
        out[plan.id] = plan;
        return out;
      }, {});

      setMappedPlans(mPlans);
      setNumber(data.numberDefault);
      setSelectedPlan(data.planDefault);
    }
  }, [data]);

  const price = (selectedPlan) ? mappedPlans[selectedPlan].price : 0;
  const planName = (selectedPlan) ? mappedPlans[selectedPlan].name : '';

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <form className="form">

      <fieldset className="form__section">
        {data.plans.map(plan => (
          <div key={plan.id} className="form__item form__item--radio">
            <input className="form__radio-control visually-hidden" type="radio" name="plan" id={`plan${plan.id}`}
                   checked={(plan.id === selectedPlan)} value={plan.id} onChange={onPlanChange}/>
            <label className="form__control-label" htmlFor={`plan${plan.id}`}>
              <span className="form__control-label-text">License Plan #{plan.name}</span>
              <span className="form__control-label-price">${plan.price} per license</span>
            </label>
          </div>
        ))}

        <div className="form__item form__item--select">
          <label htmlFor="licenses-number">Number of licenses: </label>
          <select name="licenses-number" id="licenses-number" value={number} onChange={onNumberChange}>
            {data.numbers.map(num => (
              <option key={num} value={num}>{num}</option>
            ))}

          </select>
        </div>
      </fieldset>

      <p className="form__total">
        TOTAL: <span className="form__price">${number * price}<sup>US</sup></span>
      </p>

      <button className="form__button">BUY NOW</button>

      <p className="form__selected"> {(planName) ? `Selected plan: #${planName}` : ``} </p>

    </form>

  );
};

export default Form;
