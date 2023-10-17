import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;

        const newCoffee = { name, quantity, supplier, taste, category, details }

        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }


    return (
        <div>
            <h2>Add Coffee</h2>
            <form onSubmit={handleAddCoffee} className="mt-8">
                {/* form row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="input-group">
                            <span>Coffee Name</span>
                            <input type="text" name="name" placeholder="coffee name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="input-group">
                            <span>Coffee Qty</span>
                            <input type="text" name="quantity" placeholder="coffee qty" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="input-group">
                            <span>Supplier</span>
                            <input type="text" name="supplier" placeholder="supplier" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="input-group">
                            <span>Taste</span>
                            <input type="text" name="taste" placeholder="taste" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form row category and details */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="input-group">
                            <span>Category</span>
                            <input type="text" name="category" placeholder="category" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="input-group">
                            <span>Details</span>
                            <input type="text" name="details" placeholder="details" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <input type="submit" value="Add Coffee" className="btn btn-block bg-yellow-600 text-black hover:bg-black hover:text-yellow-600 hover:border-slate-600" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;