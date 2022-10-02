const getNovs = function() {
    return [
        {
            company: 'company1',
            acts: [
                {
                    prohibited_act: 'act1',
                    findings: [ {finding: 'finding1'}, {finding: 'finding2'}, ]

                },
                {
                    prohibited_act: 'act2',
                    findings: [ {finding: 'finding1'}, ]

                }
            ]
        },
        {
            company: 'company2',
            acts: [
                {
                    prohibited_act: 'act1',
                    findings: [ {finding: 'finding1'}, ]

                },
                {
                    prohibited_act: 'act2',
                    findings: [ {finding: 'finding1'}, {finding: 'finding2'}, ]
                }
            ]
        }
    ]
}

const api = {
    getNovs
}

export default api;
