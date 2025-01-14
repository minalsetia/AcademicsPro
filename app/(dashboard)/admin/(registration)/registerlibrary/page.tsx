export default function Page() {

    return (
        <div>
            <h1>Library Registration</h1>
            <form>
                <label>
                    Library Name:
                    <input type="text" name="libraryName" />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <label>
                    Confirm Password:
                    <input type="password" name="confirmPassword" />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}