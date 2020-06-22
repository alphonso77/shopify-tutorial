import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

// left off here 
// https://shopify.dev/tutorials/build-a-shopify-app-with-node-and-react/build-your-user-interface-with-polaris#add-the-resource-picker

class Index extends React.Component {
    state = { open: false };
    render() {
        return (
            <div>
                <Page>
                    <TitleBar
                        title="Sample App"
                        primaryAction={{
                            content: 'Select products',
                            onAction: () => this.setState({ open: true})
                        }}
                    />
                    <ResourcePicker 
                        resourceType="Product" 
                        showVariants={false} 
                        open={this.state.open} 
                        onSelection={(resources) => this.handleSelection(resources)} 
                        onCancel={() => this.setState({ open: false})}
                    />
                    <Layout>
                        <EmptyState
                            heading="Discount your products temporarily"
                            action={{
                                content: 'Select products',
                                onAction: () => this.setState({ open: true }), 
                            }}
                            image={img}
                        >
                            <p>Select products to change their price temporarily.</p>
                        </EmptyState>
                    </Layout>
                </Page>
            </div>
        );

    }
    handleSelection = (resources) => {
        const idsFromResources = resources.selection.map((product) => product.id);
        this.setState({ open: false }); 
        console.log(resources); 
        console.log(idsFromResources);
    }
}

export default Index;