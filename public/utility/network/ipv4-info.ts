import { networkInterfaces } from 'os';

function getIPv4Address(): string | undefined {
    const interfaces = networkInterfaces();

    for (const interfaceName in Object.keys(interfaces)) {
        
    }
    
    return undefined;
}