import React, { useState } from 'react';
import PuppySummary from "../../components/PuppySummery";
import CustomerStep1 from "../../components/CustomerStep1";
import CustomerStep2 from "../../components/CustomerStep2";

const PuppySummaryPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      <PuppySummary />
      {step === 1 && <CustomerStep1 onContinue={() => setStep(2)} />}
      {step === 2 && <CustomerStep2 />}
    </div>
  );
};

export default PuppySummaryPage;
