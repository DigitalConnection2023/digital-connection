function HomePage() {
    return (
        <div className="space-y-8">
            {Array.from({ length: 3 }, (_, i) => {
                return (
                    <p key={i}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus porro sit ab blanditiis, qui
                        maiores necessitatibus vero placeat iure, nobis ad? Maxime numquam dolor, doloremque rerum
                        laborum sed sit eaque?
                    </p>
                );
            })}
        </div>
    );
}

export default HomePage;
