import { Request, Response } from 'express';
import { ResponseEntity } from 'ddk.registry/dist/model/common/responseEntity';

import { blockchainRepository } from 'src/repository';

export class BlockchainController {
    getInfo(_req: Request, res: Response): Response {
        const data = blockchainRepository.getInfo();

        return res.send(new ResponseEntity({ data }));
    }

    getCirculating(_req: Request, res: Response): Response {
        const data = blockchainRepository.getCirculating();

        return res.json( data );
    }

    
    getCirculatingInJson(_req: Request, res: Response): Response {
        const data = blockchainRepository.getCirculating();

        return res.send(new ResponseEntity({ data }));
    }

    getTotalSupply(_req: Request, res: Response): Response {
        const data = blockchainRepository.getTotalSupply();

        return res.json( data );
    }
}

export const blockchainController = new BlockchainController();
