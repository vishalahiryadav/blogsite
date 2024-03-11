
function Footer() {
    return (
        <div className="flex justify-around px-20 py-12 bg-orange-400" id="contect">
            <div className="p-4">
                <h2 className="p-1 text-xl font-semibold">Policies</h2>
                <p className="p-1">Privacy Policy</p>
                <p className="p-1">Term of use</p>
                <p className="p-1">Career</p>
            </div>
            <div className="p-4">
                <h2 className="p-1 text-xl font-semibold">Address</h2>
                <p className="p-1">b-40,Krishi nagar,taron ki koot</p>
                <p className="p-1">jaipur,(Rajasthan)</p>
            </div>
            <div className="p-4">
                <h2 className="p-1 text-xl font-semibold">Social links</h2>
                <p className="p-1">Contact:551441</p>
                <div className="flex">
                    <a className="p-1" href="https://poodles.in/"><img src="/images/facebook.png" alt="" /></a>
                    <a className="p-1" href="https://poodles.in/"><img src="/images/instagram.png" alt="" /></a>
                    <a className="p-1" href="https://poodles.in/"><img src="/images/linkedin.png" alt="" /></a>

                </div>
            </div>
        </div>
    )
}

export default Footer