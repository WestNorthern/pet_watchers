import h from './htm_create_element';

const PriceDisplay = ({ formData }) => {
  const styles = {
    displayComponent: {
      marginTop: '20px',
      padding: '15px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#e9ecef'
    }
  };

  const calculateCost = (type, hours) => {
    const rate = type === 'Cat' ? 5 : 10;
    const baseCost = 20;
    return baseCost + (rate * hours) ;
  };

  const buildAnimalCostDisplay = (type, hours) => {
    const dog = `Dog Watching Rate ($10 per hour) ...... $${hours * 10}`
    const cat = `Cat Watching Rate ($5 per hour) ......... $${hours * 5}`
    return type === 'Dog' ? dog : cat;
  };

  const totalCost = calculateCost(formData.animalType, formData.hoursRequested);
  const animalCost = buildAnimalCostDisplay(formData.animalType, formData.hoursRequested);

  return h`
    <div style=${styles.displayComponent}>
      <p>We will be watching ${formData.animalName} the ${formData.animalType} for ${formData.hoursRequested} hours on ${formData.dateOfService}.</p>
      <p><strong>Base Cost ................................................ $20</strong></p>
      <p><strong>${animalCost}</strong></p>
      <p><strong>___________________________________</strong></p>
      <p><strong>Total Cost ............................................... $${totalCost}</strong></p>
      <p>Does everything look good, ${formData.firstName}?</p>
    </div>
  `;
};

export default PriceDisplay;

