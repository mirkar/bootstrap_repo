
var applicationStatuses = {
    applications: [
        {
            appName: "Premier",
            services: [
                
                {
                    serviceName: "Apache",
                    serviceUp: 12,
                    serviceDown: 2
                }, 
                
                {
                    serviceName: "Weblogic",
                    serviceUp: 134,
                    serviceDown: 14
                }
            
            ]
        }, 
        
        {
            appName: "BID",
            services: [
                
                {
                    serviceName: "Apache",
                    serviceUp: 3,
                    serviceDown: 0
                }, 
                
                {
                    serviceName: "Weblogic",
                    serviceUp: 25,
                    serviceDown: 3
                }
            
            ]
        }
    
    ]
};

console.log("appsttaus.js: App statuses received");
