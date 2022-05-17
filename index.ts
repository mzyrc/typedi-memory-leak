import 'reflect-metadata';
import { Service, Container, ContainerInstance } from 'typedi';
import {v4 as uuidv4} from 'uuid';

@Service()
export class DependencyA {

}

@Service()
export class DependencyB {

}

@Service()
export class DependencyC {

}


function runApp(): void {
    console.log('Starting up')
    const numberOfScopedContainersToCreate = 10000;
    
    for (let i = 0; i < numberOfScopedContainersToCreate; i++) {
        const containerId = uuidv4();
        let scopedContainer: ContainerInstance | null = Container.of(containerId)
        const a = Container.get(DependencyA)
        const b = Container.get(DependencyB)
        const c = Container.get(DependencyC)
    
        scopedContainer.reset();
        scopedContainer = null;
    }
    console.log('finished')
}

runApp();

setInterval(() => {
    runApp();
}, 1000)