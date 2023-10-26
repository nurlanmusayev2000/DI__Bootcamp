import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: "", errorInfo: "" };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <img src="link_image" />
                    <p>Something went wrong...</p><br></br>
                    <p><u>The error is</u> {this.state.error.toString()} </p><br></br>
                </div>
            )
        }

        return this.props.children;
    }
}



export default ErrorBoundary