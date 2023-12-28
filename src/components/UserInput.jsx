import { useState } from "react";

const UserInput = ({ userInput, onChange }) => {


    return <section id="user-input">
        <div className="input-group" >
            <p>
                <label>Počáteční investice</label>
                <input
                    type="number"
                    required
                    value={userInput.initialInvestment}
                    onChange={(event) => onChange('initialInvestment', event.target.value)} />
            </p>
            <p>
                <label>Roční investice</label>
                <input
                    type="number"
                    required
                    value={userInput.annualInvestment}
                    onChange={(event) => onChange('annualInvestment', event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Očekávaný návrat</label>
                <input
                    type="number"
                    required
                    value={userInput.expectedReturn}
                    onChange={(event) => onChange('expectedReturn', event.target.value)} />
            </p>
            <p>
                <label>Trvání</label>
                <input
                    type="number"
                    required
                    value={userInput.duration}
                    onChange={(event) => onChange('duration', event.target.value)} />
            </p>
        </div>
    </section>
}

export default UserInput;
