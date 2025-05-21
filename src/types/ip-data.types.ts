// Main data interface for the IP Geolocation API response
export interface IPGeolocationResponse {
    ip: string;
    location: {
        country: string;
        region: string;
        city: string;
        lat: number;
        lng: number;
        postalCode: string;
        timezone: string;
    };
    isp: string;
}

// Interface for the app's loading state
export interface IPDataState {
    data: IPGeolocationResponse | null;
    isLoading: boolean;
    error: string | null;
}

// Props for the InfoPanel component
export interface InfoPanelProps {
    ipData: IPGeolocationResponse | null;
    isLoading: boolean;
    error: string | null;
}

// Props for indivisual info items in the panel
export interface InfoItemProps {
    label: string;
    value: string;
}

// Props for the map component
export interface MapProps{
    coordinates: {
        lat: number;
        lng: number;
    } | null;
    isLoading: boolean;
}

// Props for the header/search component
export interface SearchProps{
    onSearch: (query: string) => void;
    isLoading: boolean;
}