// Actions
import getCurrentUser from "./actions/getCurrentUser";
import getListing from "./actions/getListing";

// Components
import ClientOnly from "./components/ClientOnly";
import Container from "./components/container/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

const Home = async () => {
  const listings = await getListing();
  const currentUser = await getCurrentUser();

  if (!listings.length) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((item: any) => (
            <ListingCard
              key={item.id}
              data={item}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
