import { createContext, useState } from 'react';

const AuthContext = createContext();

const initialAuth = null;

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialAuth);

	const handleAuth = e => {
		if (auth) {
			setAuth(null);
		} else {
			setAuth(null);
		}
	};

	const data = { auth, handleAuth };
	return <AuthContext.Provider value={data}>{children} </AuthContext.Provider>;
};

export { AuthProvider };
