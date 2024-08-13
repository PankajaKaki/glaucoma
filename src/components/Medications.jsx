import './medications.css'
function Medications() {
    return (
    <div className="medication">
        <h1 className='header'>Medications</h1>
        <table>
            <tr>
                <th>Sl. no</th>
                <th>Medicine Name</th>
                <th>Prescribed Doctor</th>
                <th>From Date</th>
                <th>No of times to be taken per day</th>
            </tr>
            <tr>
                <td>1</td>
                <td>medicine 1</td>
                <td>doctor</td>
                <td>date</td>
                <td>2</td>
            </tr>
            
        </table>
    </div>
    );
    }
     
    export default Medications;