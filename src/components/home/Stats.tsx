export function Stats() {
    return (
        <section className="bg-primary-text text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
                    <div className="p-4">
                        <div className="text-4xl md:text-5xl font-bold text-button-action mb-2">Minutes</div>
                        <p className="text-gray-400 text-lg">to settle cross-border (not days)</p>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl md:text-5xl font-bold text-button-action mb-2">Lower</div>
                        <p className="text-gray-400 text-lg">total cost vs. legacy wires and cards</p>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl md:text-5xl font-bold text-button-action mb-2">99.999%+</div>
                        <p className="text-gray-400 text-lg">uptime and a battle-tested integration experience</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
