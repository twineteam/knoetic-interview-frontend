import { rehireEligibleList, rehireIneligibleList, rehireUnknownList } from "./mockEmployees";

// Return employee list { name, position, rehire_eligible, voluntary, ... }
export function useEmployeesApi() {
    const viewRehireEligible = (idx) => {
        return rehireEligibleList[idx]
    }
    const viewRehireIneligible = (idx) => {
        return rehireIneligibleList[idx]
    }
    const viewRehireUnknown = (idx) => {
        return rehireUnknownList[idx]
    }
    return {
        employees: { rehireEligibleList, rehireIneligibleList, rehireUnknownList },
        actions: { viewRehireEligible, viewRehireIneligible, viewRehireUnknown }
    }
}
