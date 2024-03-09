
function Footer() {
    return (
        <div className="flex justify-around px-20 py-2" id="section1">
            <div className="p-4">
                <h2>Policies</h2>
                <p>Privacy Policy</p>
                <p>Term of use</p>
                <p>Career</p>
            </div>
            <div className="p-4">
                <h2>Address</h2>
                <p>b-40,Krishi nagar,taron ki koot</p>
                <p>jaipur,(Rajasthan)</p>
            </div>
            <div className="p-4">
                <h2>Social links</h2>
                <i></i>
                <p>Contact:551441</p>
                <div className="flex">
                    <a href="https://poodles.in/"><img src="/images/facebook.png" width="50px" alt="" /></a>
                    <a href="https://poodles.in/"><img src="/images/instagram.png" alt="" /></a>

                </div>
            </div>
        </div>
    )
}

export default Footer