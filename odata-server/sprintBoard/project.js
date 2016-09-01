require('odata-server');

$data.Entity.extend("Project", {
    Client:           { key: true,  type: 'int',   required: true,     maxLength: 6 },
    ProjectId:        { key: true,  type: 'string',  required: true,   maxLength: 25 },
    DescriptionLong:  { key: false, type: 'string',  required: true,   maxLength: 100 },
    Backlog:          [{
                      Client:           { key: true,  type: 'int',      required: true, maxLength: 6 },
                      ProjectId:        { key: true,  type: 'string',   required: true, maxLength: 25 },
                      BackLogId:        { key: true,  type: 'string',   required: true, maxLength: 25 },
                      DescriptionLong:  { key: false, type: 'string',   required: true, maxLength: 100 },
                      CapaUnitOfMeasure:{ key: false, type: 'string',   required: true, maxLength: 3 },      
                      PlannCapa:        { key: false, type: 'decimal',  required: true },
                      PlannBegin:       { key: false, type: 'datetime', required: true },
                      PlannDelivery:    { key: false, type: 'datetime', required: true },
                      ConsumedCapa:     { key: false, type: 'decimal',  required: true },
                      Tasks:  [{
                              Client:           { key: true,  type: 'int',      required: true,   maxLength: 6 },
                              ProjectId:        { key: true,  type: 'string',   required: true,   maxLength: 25 },
                              BackLogId:        { key: true,  type: 'string',   required: true,   maxLength: 25 },
                              TaskID:           { key: true,  type: 'int',      required: true,   maxLength: 6 },
                              TaskCategory:     { key: false, type: 'string',   required: true,   maxLength: 3 },
                              DescriptionShort: { key: false, type: 'string',   required: true,   maxLength: 25 },
                              DescriptionLong:  { key: false, type: 'string',   required: true,   maxLength: 100 },
                              CostPlanned:      { key: false, type: 'decimal',  required: true },
                              ConstPayed:       { key: false, type: 'decimal',  required: true },
                              Status:           { key: false, type: 'string',   required: true,   maxLength: 3 } 
                              }] 
                      }]
});

$data.EntityContext.extend("SBoardDatabase", {
    Todos: { type: $data.EntitySet, elementType: Project }
});

$data.createODataServer(SBoardDatabase, '/sprintBoard', 52999, 'localhost');