import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../empleados/entities/empleado.entity';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);
