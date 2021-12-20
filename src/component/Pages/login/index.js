
import "./style.css";


export default () => {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center bg-gray-300 text-white" >
                <div className="login-card bg-white overflow-hidden shadow-xl flex">
                    <div className="w-1/2 h-full">
                        <div className="h-full text-black flex items-center justify-center">
                            <div className="w-3/5">
                                <div className="pb-3">
                                    <h1 className="capitalize font-semibold text-4xl pb-2">sign in</h1>
                                    <p className="font-medium text-xs text-gray-400">Masukan Email dan Password Untuk mulai login ke akun</p>
                                </div>
                                <div className="pb-3">
                                    <label className="block pb-2 capitalize" htmlFor="email-login-form" >email</label>
                                    <input id="email-login-form" placeholder="Example@email.com" name="email-login-form" className=" outline-none w-full px-2 py-1 border rounded " type="text" />
                                </div>
                                <div className="pb-3">
                                    <label htmlFor="password-login-form" className="block pb-2 capitalize">password</label>
                                    <input id="password-login-form" placeholder="Password" name="password-login-form" className=" outline-none w-full px-2 py-1 border rounded" type="password" />
                                </div>
                                <div className="bg-indigo-400 hover:bg-indigo-600 transition rounded flex items-center justify-center mt-14 py-2 text-white cursor-pointer">Login</div>
                                <div className="my-10 relative">
                                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-400 pb-1">atau</p>
                                    <hr  />
                                </div>
                                <div className="grid gap-3 grid-flow-col grid-cols-2">
                                    <div className="border rounded text-center">a</div>
                                    <div className="border rounded text-center">a</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/2 h-full bg-indigo-300 relative">
                        <div className=" rounded-full w-96 h-96 right-0 -translate-y-1/2 translate-x-1/2 top-0 bg-indigo-400 absolute"></div>
                        <></>
                    </div>
                </div>
            </div>
        </>
    )
}